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
"_c_s_p_coherency_checker_interface_8hpp_source.html",
"_event_component_8hpp_source.html",
"_mapper_device_8hpp_source.html",
"_q_graphics_combo_8hpp_source.html",
"_string_factory_key_8hpp_source.html",
"class_audio_1_1_settings_1_1_view.html#af6dc6bee3b47b3669f2014813dcc60e8",
"class_curve_1_1_command_object_base.html#aff951630a3e4d92a55273db757a9397b",
"class_curve_1_1_segment_model.html#a002c46c1c179062a8b363f1ecd22b965",
"class_data_stream_reader.html#a873a591df07b34718a3c4da4fe828ca0",
"class_dataflow_1_1_audio_address_dialog.html#ad5fe736eae1de5aed901549996906ec6",
"class_device_1_1_device_list.html#aaa817d0a9c58fd526e68795584fde5f9",
"class_execution_1_1_interval_component.html#a83f2fe81cfc353c944067847fceae225",
"class_explorer_1_1_address_item_model.html#acb0191e078854144fef669437bd2b6a8",
"class_explorer_1_1_listening_manager.html#a84dde4ab8734361e6de09c7668cc34a5",
"class_gfx_1_1_gfx_context.html#adc129ec9abaf149bb15ccc590eacc57c",
"class_gfx_1_1_video_1_1_presenter.html#a6b41159f1a6e0095d07c7682bc14105c",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_01std_1_1is__base__of_3_fa82f8e34463791cc3719bf96cdfa1aa.html#a4e56927470794afd9c590cbd3095d487",
"class_j_s_o_n_reader.html",
"class_j_s_o_n_writer.html#a841d7898a38092eb384701be450524f2",
"class_local_tree_1_1_base_callback_wrapper.html",
"class_media_1_1_sound_1_1_process_model.html#a05624ecd9e5b9bf6c774840e94afd86b",
"class_mixer_1_1_audio_device_slider.html#a972ad31c16366637b3f880769dfc55d5",
"class_path.html#a8714f126861b816502889d8d7b8dcfae",
"class_process_1_1_control_outlet.html#a4d107894d503ea668b0556f8af9aa684",
"class_process_1_1_layer_view.html#a74871a953c4a9a925061064111c48d5c",
"class_process_1_1_process_model.html#a43a41a4f2cc17bec8e66ec4b634ea220",
"class_protocols_1_1_local_protocol_settings_widget.html#a794a47fe6b85c6d983ee0358385220e2",
"class_remote_control_1_1_application_plugin.html#ac099c0849d21a61f9166c76cfb908695",
"class_scenario_1_1_command_1_1_add_process_in_new_slot.html",
"class_scenario_1_1_command_1_1_merge_events.html",
"class_scenario_1_1_command_1_1_set_rigidity.html#a5e51e339b9cee56f3cdd6bf4d990d85e",
"class_scenario_1_1_drop_process_on_state_helper.html#aca0ca6a1aad30daa6c808b9ea954a6a4",
"class_scenario_1_1_interval_component.html#a0d2ac8ecc20f223094021e46d53a6e8b",
"class_scenario_1_1_interval_view.html#a3c3350599cb9f1cfae7630bd512da285",
"class_scenario_1_1_move_on_anything___slot_transition.html",
"class_scenario_1_1_scenario_document_presenter.html#a10abb7a3bf64dc5d1b71f66e0fca999d",
"class_scenario_1_1_simple_expression_editor_widget.html#afb7df0e3a19b15058ed7e9749eee3fe2",
"class_scenario_1_1_time_signature_handle.html#a058bc28e91e4947eddc2d16f0867b6c5",
"class_single_ongoing_command_dispatcher.html#a179f483243b74ef3aaebe5b0ec83e789",
"class_state_1_1_vec_domain_widget.html#a79df4f94cbfd661a226d9d1db00f4c57",
"class_uuid_key.html#a76a6f530f3bf28857a672d37cccc4b0b",
"classoscr_1_1_custom_item.html#ae1d9731103f314e6cee098a676bf9111",
"classscore_1_1_command_stack.html#abe423a8e50bb494bab24955302f9d779",
"classscore_1_1_entity_list.html#adf5b3369b92e173be53b2d3a48514885",
"classscore_1_1_int_slider.html#a67410c14ad237fe350b34e43891cd628",
"classscore_1_1_property_command___t.html#acc7b7b4f13ead9d895b91bc3c3e78906",
"classscore_1_1_q_graphics_toggle.html#a5b30016278671315195f67998196c058",
"classscore_1_1_skin.html#a8a5e29b690642377943a59fc72c74cc7",
"classscore_1_1gfx_1_1_generic_node_renderer.html#a60e0650f23d5f7c07cc4c771bf35f602",
"classscore__plugin__jit.html",
"classvst3_1_1vst__node__base.html#ab8e15c9c77d23a3170037b4fe4fdfc11",
"plugins_2score-plugin-media_2_media_2_step_2_presenter_8hpp_source.html",
"struct_analysis_1_1_m_f_c_c.html#aafe417ea1c6339400eb53ccdcdae3251",
"struct_control_1_1_int_spin_box.html#a4a9c1298100d8f015a419f5cb882bf24",
"struct_dataflow_1_1_min_max_float_outlet_factory.html#a8b598f6f080bfd3305fefcf7b3236a26",
"struct_execution_1_1_setup_context.html#a7a956fdda513ef4a1f7cf121f6683343",
"struct_gfx_1_1_spout_node.html#a84928531869ed1263555f106734d2548",
"struct_l_v2_1_1_global_context.html#ab1da3890059f510cf1a867bee53f8c56",
"struct_media_1_1_audio_info.html#acebeb9a461ab5bf13e8a49a450c866cb",
"struct_nodal_1_1_hierarchy_manager_1_1_child_pair.html#a838cabf9d798279ec4910e9eb19d7352",
"struct_nodes_1_1_pulse_to_note_1_1_node_1_1_note_in.html",
"struct_process_1_1_h_s_v_slider.html#a6bd7f203881091c64701ff60d2454c5a",
"struct_process_1_1_time_chooser.html#af7f29ffb759b4df35e043b6a14e93bbf",
"struct_q_meta_type_id_3_01_scenario_1_1_interval_model_1_1_view_mode_01_4.html",
"struct_sample_timings.html#af14575458bcfdbafaac3d6b8843b4933",
"struct_scenario_1_1_processes_being_copied.html#a452ba90fd954465602f3e7cde14f1211",
"struct_state_1_1_destination_qualifiers.html#a3dff15969413ab1857da9898df7461fa",
"struct_time_val.html#a21b78489bf504bdd7206af651a1d4359",
"structoscr_1_1_custom_item_1_1custom__mouse__event.html#a5969c8aef0308d6333f6f7a4309cd3ca",
"structscore_1_1_application_components_data.html#abe50941ef0fe9131c1f22234f94a483a",
"structscore_1_1_hierarchic_model.html",
"structscore_1_1_string_constants.html#a8726f257a903348cf124ce556995dd7f",
"structscore_1_1gfx_1_1_mesh.html#a72e7dc86ad0ecc8372f481533873137ca8f505b45c8f32f37a66d60a6f617cc0c",
"structscore_1_1gfx_1_1_y_u_y_v422_decoder.html#a01290c71db7ca54c627f91984588d399",
"structvst3_1_1_vst3_data_stream.html#a081464eddd00b6c709576bb71adad25c"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';