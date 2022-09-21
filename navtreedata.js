/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "score", "index.html", [
    [ "Coding Style", "_coding_style.html", [
      [ "General philosophy", "_coding_style.html#Philosophy", null ],
      [ "Qt versus Modern C++", "_coding_style.html#Qt", null ],
      [ "Inheritance", "_coding_style.html#Inheritance", null ],
      [ "Passing values", "_coding_style.html#Values", null ],
      [ "Templates", "_coding_style.html#Templates", null ]
    ] ],
    [ "Commands", "_commands.html", [
      [ "Creating a command", "_commands.html#CreatingCommand", null ],
      [ "Launching commands", "_commands.html#LaunchingCommands", null ],
      [ "Special commands", "_commands.html#SpecialCommands", [
        [ "Command dispatchers", "_commands.html#Dispatchers", null ]
      ] ]
    ] ],
    [ "Contexts", "_contexts.html", null ],
    [ "Graphics plug-ins", "_gfx_plugins.html", [
      [ "Creating a custom node", "_gfx_plugins.html#CustomNode", null ],
      [ "Shader conventions", "_gfx_plugins.html#ShaderConventions", null ],
      [ "Video decoders", "_gfx_plugins.html#VideoDecoders", null ]
    ] ],
    [ "Data models", "_models.html", [
      [ "Organization", "_models.html#Organization", null ],
      [ "Identification of objects", "_models.html#IdentificationObjects", [
        [ "Identifiers", "_models.html#Identifiers", null ],
        [ "Paths", "_models.html#Paths", null ]
      ] ],
      [ "Creating models", "_models.html#CreatingModels", null ],
      [ "Relationship to Qt's item models", "_models.html#ItemModel", null ],
      [ "Tree models for simple objects", "_models.html#SimpleObjectsModel", null ]
    ] ],
    [ "Model-View-Presenter separation", "_model_view_presenter.html", null ],
    [ "Plug-ins, factories and interfaces", "_plugins_factories_and_interfaces.html", [
      [ "Anatomy of a plug-in", "_plugins_factories_and_interfaces.html#Anatomy", null ],
      [ "Adding a new component", "_plugins_factories_and_interfaces.html#NewClass", null ],
      [ "Declaring a new interface", "_plugins_factories_and_interfaces.html#NewInterface", null ],
      [ "Add-on manager", "_plugins_factories_and_interfaces.html#AddonManager", null ]
    ] ],
    [ "Useful score interfaces", "_score_interfaces.html", null ],
    [ "Serialization", "_serialization.html", [
      [ "Generalities on serialization", "_serialization.html#GenSer", null ],
      [ "DataStream serialization", "_serialization.html#DataStreamSer", null ],
      [ "JSON serialization", "_serialization.html#JSONObjSer", [
        [ "For deserializing", "_serialization.html#ObjDeser", [
          [ "In DataStream", "_serialization.html#DSObjDeser", null ],
          [ "In JSON", "_serialization.html#JSObjDeser", null ]
        ] ],
        [ "Serialization of polymorphic types", "_serialization.html#PolySer", null ],
        [ "Serialization examples", "_serialization.html#SerExamples", null ]
      ] ]
    ] ],
    [ "State Machines", "_state_machines.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"_boost_variant2_serialization_8hpp_source.html",
"_event_8hpp_source.html",
"_make_bus_8hpp_source.html",
"_protocol_settings_widget_8hpp_source.html",
"_state_presenter_8hpp_source.html",
"class_audio_1_1_settings_1_1_view.html#a8343165425cf3d8cbd3ed618c4774dbd",
"class_curve_1_1_command_object_base.html#ac5c7d8a2a4c76ff672c92104737f2a8d",
"class_curve_1_1_segment_factory___t.html#af570456a999beba6095f34541bb456e8",
"class_data_stream_reader.html#a816d013c1e9da311622b540bc8c621d6",
"class_dataflow_1_1_audio_address_dialog.html#a6a7c2736a9a4bef49036bda2b6689000",
"class_device_1_1_device_list.html#a3d21c953b46e0a0a776b94a4ce2a4933",
"class_execution_1_1_interval_component.html#a245c1bb2c8b6aa207988a93358f28356",
"class_explorer_1_1_address_item_model.html#a9850c86be8070487c361fd039892131bae3add130fa5cdacc4dd9e3367f1ad075",
"class_explorer_1_1_listening_handler_factory_list.html#a01afc630609fc22fed5c3a3a7a81ed99",
"class_gfx_1_1_gfx_context.html#a6fd5d03736d79861317e969646bccea8",
"class_gfx_1_1_syphon_settings_widget.html#aa2dad11f965a05db73aac790e94ccbe9",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_01std_1_1is__base__of_3_fa82f8e34463791cc3719bf96cdfa1aa.html#a090a13394ff91e73bc29ffed0f72d1c6",
"class_j_s_1_1_vec2f_value_type.html#ab5e6e433f60bcb5b48d0b6a8840cf1bd",
"class_j_s_o_n_writer.html#a728c810fa9cc71591128064cc2f1b90c",
"class_library_1_1_user_panel.html",
"class_media_1_1_sound_1_1_layer_presenter.html#a2eb710092d123de3fcea28bda312ad66",
"class_midi_outlet.html#a9deb3c79c79fb243d3b642753bd185c5",
"class_path.html",
"class_process_1_1_control_inlet.html#a58e556485a625bad74b3f93d52b71c14",
"class_process_1_1_layer_presenter.html#af6bcfba7b1ab3c33b675e6e36fde6861",
"class_process_1_1_process_model.html#a09d1f1cbe81202d5a28caf0c9db65725",
"class_protocols_1_1_library_device_enumerator.html",
"class_recording_1_1_recorder_factory.html#a88af36eead2990b6fa8ac7a2b1e5effb",
"class_scenario_1_1_command_1_1_add_messages_to_state.html#aed0bdb4e3af082f7d2837a2bd3a493af",
"class_scenario_1_1_command_1_1_macro.html#aacebfde47d5576eb8bacd7289905d661",
"class_scenario_1_1_command_1_1_set_max_duration.html#a5ba996e934fae0e736593979c17569b9",
"class_scenario_1_1_drop_process_in_interval_helper.html#a4c471c149106196c31a51a4699a56a31",
"class_scenario_1_1_graphal_interval_presenter.html#af292104d8708fe2252bf31d3c905a626",
"class_scenario_1_1_interval_view.html#a0fbf0ed28adbff9d89cc280a85636398",
"class_scenario_1_1_move_event_state.html#a27e7e9bedb8dbb66afb30692134191ff",
"class_scenario_1_1_scenario_document_model.html#a821c9a7c43a4b4ef2cf8203f16646f59",
"class_scenario_1_1_simple_expression_editor_widget.html",
"class_scenario_1_1_time_ruler_base.html#a4585aae73dcd10872cf4ca13d5f40fae",
"class_selection.html#ac124ab293d5f1ebc30f7949fa49db59e",
"class_state_1_1_unit_model.html#a8373902e3a1f8738bc417a4bd964821a",
"class_tree_path.html#ae4f7665eb176da0bfd2bc753a046e1df",
"classlibsuil.html#a561e5d9184d8cec54ed61067afc58fb0",
"classscore_1_1_command_stack.html#a6f3072471abd7527ac75427552713b6b",
"classscore_1_1_entity_list.html#a6e72fccfb92e3c6107911005f0c028e3",
"classscore_1_1_indirect_unordered_map.html#a3d1573df5b4cd22cad589a5de0b55dda",
"classscore_1_1_project_settings_factory.html#a57b7880050f22cd1be6c27e9b32d7086",
"classscore_1_1_q_graphics_spinbox.html#a698e52082860dcd5382a8d981c3bc66b",
"classscore_1_1_skin.html#a3a277663189defbda21354cf86d4b340",
"classscore_1_1dynvector__impl.html#a9b390c5768387c21ca5249161009b8ad",
"classscore__plugin__automation.html",
"classvst3_1_1param__queue.html#aef76960c1ab5bbcb4601e69140c29666",
"namespace_state.html",
"struct_analysis_1_1_energy_difference_1_1_metadata.html",
"struct_control_1_1_has_custom_u_i_3_01_nodes_1_1_math_mapping_1_1_node_01_4.html",
"struct_dataflow_1_1_audio_outlet_factory.html#a3feabdd35e60703bf3f81a4993c5fdad",
"struct_execution_1_1_settings_1_1_merging_policies.html#a9baaf53d1574b2ab796789f2dfffa2a2",
"struct_gfx_1_1_shader_source.html#a4fd49f4b4b423b8f6bbefbb84d5adb97",
"struct_json_value.html#a28a6ac8a3ed30414da6903127d6cf96e",
"struct_media_1_1_audio_file.html#aacc732ca61c3fab580478bda39d0a028",
"struct_midi_1_1_note_data.html#a775016bfe7df60c2d47087730080faf7",
"struct_nodes_1_1_math_mapping_1_1_node_1_1_state.html#ace9fdc9e40f96e98db7789bea262b079",
"struct_process_1_1_layout_builder_base.html#a300e8637b0b309a62673c7d5c54763da",
"struct_protocols_1_1_m_i_d_i_specific_settings.html#ad256b7fc3acf2b9248057e95cd1cba9c",
"struct_q_meta_type_id_3_01std_1_1shared__ptr_3_01_process_1_1_preset_01_4_01_4.html",
"struct_scenario_1_1_command_1_1_message_pairs.html#aefe07c0b9d9fdb25401ec426ebbf0c91",
"struct_scenario_1_1_slot_path.html#af0a472e4db5f55c633e50056577bb4a8",
"struct_state_1_1_unit_model_1_1_accessor_model.html#a0a1c610faf95991ece0b6f7f0729ca6b",
"struct_variant_data_stream_serializer.html#a69b84a1df54ad37fcb8e52ab24dea5ec",
"structoscr_1_1_message_bus_wrapper_from_ui_3_01_info_01_4.html",
"structscore_1_1_application_context.html#ae9a5fb08fd24f276c868a77d7e6465be",
"structscore_1_1_id_gen.html#a6554c04f75ce6f890786e85b5392fab4",
"structscore_1_1_string_constants.html#a9cd0bc9b5f47e339a2815ac9ac6a659a",
"structscore_1_1gfx_1_1_mesh_buffers.html#ae2410e76345491efb23e78b542dd6a95",
"structscore_1_1gfx_1_1isf__input__port__vis.html#a2e5554a4b3766a3fec6eb7debef3289b",
"structvst3_1_1_window_container.html#a1f31e8eaae0dcfa72a8abfabbed125e7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';