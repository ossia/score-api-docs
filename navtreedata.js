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
"_entity_serialization_8hpp_source.html",
"_magnetism_adjuster_8hpp_source.html",
"_protocol_list_8hpp_source.html",
"_state_menu_overlay_8hpp_source.html",
"class_audio_1_1_settings_1_1_view.html",
"class_curve_1_1_command_object_base.html#a15470ca80349e777bb72e6a0b4e588b9",
"class_curve_1_1_segment_factory.html#af20bc40deb46801a8b46011b407f981a",
"class_data_stream_reader.html#a6c67db2f5b256bfcd7317e7b680fd33e",
"class_data_stream_writer.html#af932b4c91dee61ae4ddeff38bc3d3fa1",
"class_device_1_1_device_interface.html#ae61dde47293b30a2709bc094b56e285c",
"class_execution_1_1_interval_component_base.html#ac7cc2d2ef691fafb93dff3fc4fa9a982",
"class_explorer_1_1_address_settings_widget.html#a335c7346df52caf70487b9c0d853cb48",
"class_explorer_1_1_node_update_proxy.html#ad8b7120287b3ab49c220dbc93d40c292",
"class_gfx_1_1_gfx_output_device.html#a3b0a0da0b1abdd0d902d8e2d8a0859db",
"class_gfx_1_1_video_1_1_model.html#a94842300382c36d1509146b8cd77b2eb",
"class_id_container_3_01_element_00_01_model_00_01std_1_1enable__if__t_3_9std_1_1is__base__of_3_0398040744b894784cbf4c6c5f48e82f4.html#a1af11fb76d3b0fd5b07de1f735789049",
"class_j_s_1_1_process_model.html#ade51ac8e95e0897fcac5afc1f1392999",
"class_j_s_o_n_writer.html#a4e507744247bdfbc9435d3774310e498",
"class_library_1_1_recursive_filter_proxy.html#a8516b47111928d86885d27effb0c4f38",
"class_media_1_1_sndfile_decoder.html#a061520890d2bc2ba9309b9c3a2955e83",
"class_midi_1_1_view.html#a554cfa7137446e6d180965dd17beee47",
"class_p_m_1_1_plugin_settings_model.html",
"class_process_1_1_cable.html#a37a78e28f5b5983c05202cf527e60f9e",
"class_process_1_1_layer_factory_list.html#a1eda9ff56425cb1b1b6a509192d20a27",
"class_process_1_1_process_factory___t.html#a883afd1d523b6a6a09e83387c7104162",
"class_protocols_1_1_leapmotion_protocol_settings_widget.html#a323028a52a7923c70f1c457536a9ef55",
"class_recording_1_1_automation_recorder.html#a4ef35a7cc9736d5c88cef68cf8cdb8c5",
"class_scenario_1_1_clickable_label_item.html#ac7e65af350356402f8a13b4e5c37d432",
"class_scenario_1_1_command_1_1_macro.html#a2bb826b875dbc65b447d9cf868bee65a",
"class_scenario_1_1_command_1_1_serializable_move_event.html#a43d34e4bba2eecf0bc8cd35cb3458b13",
"class_scenario_1_1_displayed_elements_tool_palette_factory_list.html",
"class_scenario_1_1_good_old_displacement_policy.html",
"class_scenario_1_1_interval_presenter.html#af1771dfb01f41a58a0f74f22f31f4c3d",
"class_scenario_1_1_minimap_graphics_view.html",
"class_scenario_1_1_scenario_displayed_elements_tool_palette.html#a166353decc0ee5edf99d44c29f9f3535",
"class_scenario_1_1_settings_1_1_theme_dialog.html#a4c427cf1587c36da62a4dbaca705b202",
"class_scenario_1_1_temporal_interval_presenter.html#aea56b1d121e468d02ccd3b1db5fbcb58",
"class_script.html#a6813f2d3c41c40be3f4e6c512f2d8598",
"class_state_1_1_numeric_value_set_dialog.html#a4f8a934be21cc537d150d2dbb1003ee3",
"class_tree_node_3_01_state_1_1_expr_data_01_4.html#aca6517791193208da5fbeb2f001b10f9",
"classid__base__t.html",
"classscore_1_1_command_stack.html#a265d01c3caba9b294170b342245b48a9",
"classscore_1_1_empty_rect_item.html#ab8c669f4ab7ea59eaea97f7d1d7958e1",
"classscore_1_1_indirect_container.html#afa18b68fe3d502baace2da8a592113b8",
"classscore_1_1_presenter.html#a49e174f20acef972f0803f1d59e508d8",
"classscore_1_1_q_graphics_selectable_pixmap_toggle.html#ae9fd60a0702ede874566eef95b6b1aab",
"classscore_1_1_simple_text_item.html#ac3a39519ce04318f78ee53a2cef08106",
"classscore_1_1_zoom_item.html#a998ffb456ae1a59d3340adc1216c638d",
"classscore_1_1gfx_1_1_window.html#a199eb355addda6e5b406dfef63568562",
"classvst3_1_1_v_s_t_graphics_slider.html#af2b6fcebb61629e23d2c5fc399980320",
"models_8hpp_source.html",
"score__plugin__spline3d_8hpp_source.html",
"struct_control_1_1_float_display.html#a6d6db4c53c4622c5ea544371f57bd01d",
"struct_curve_1_1_style.html#a9eea13bca928960229ac6231ca94bdf5",
"struct_execution_1_1_recompute_propagate.html#a0bd352890963ea1f615ac26805bc2a23",
"struct_gfx_1_1_kinect2_1_1kinect2__camera.html#aff4c4c6d3d03fec1c32ba3198fa8ce4f",
"struct_jit_1_1_exception.html#ae2da1d781e821c11c4ba876236acb2d6",
"struct_local_tree_1_1_set_property_wrapper.html#a51d1dcce4807d8a18db17dff3ea44e7c",
"struct_midi_1_1_midi_style.html#a8c713ef1fcb9fc63ea40d70a68c888bd",
"struct_nodes_1_1_math_generator_1_1_node_1_1_state.html#ad53bdd4bbd09bda886822fd7cd2103fc",
"struct_process_1_1_control_setup.html#a94bab3be048d189a89fb2dc93c96f763",
"struct_protocols_1_1_fixture_database_1_1_scan.html#ad1b0903b5165797816bf08ada75f03da",
"struct_q_meta_type_id_3_01ossia_1_1net_1_1tags_01_4.html",
"struct_scenario_1_1_categorized_addresses.html#a621b09fffd985cb7520d98e6ff0701d8",
"struct_scenario_1_1_slot_id.html#a032a81ae0d23334734fbeea916f21680",
"struct_state_1_1_relation.html#a4e4fc4de0cc0d32ebb948689cfc6b938",
"struct_ui_1_1_signal_display_1_1_node_1_1_layer.html#af4ce968995bed682e2171001965edd4e",
"structoscr_1_1_layout_builder.html#a2a3bfa52cc203a18b79dab6ee8bb1ca2",
"structscore_1_1_application_components_data.html#a3f3e6458fbd40b27b6784ae47d0387cd",
"structscore_1_1_g_u_i_application_context.html#a7f530e63eca6654db434acae3ac4d135",
"structscore_1_1_string_constants.html#a6cf1ed1868a82f43f86d28ae37bf5a21",
"structscore_1_1gfx_1_1_images_node_1_1_u_b_o.html#a308ae22a92c475a42399d90b40790fd5",
"structscore_1_1gfx_1_1_y_u_v420_decoder.html#ab89f43d84b4456117990da31d1c073cb",
"structvst3_1_1_port_creation_visitor.html#a7390b33525d43039f8e1939d198b13e2"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';